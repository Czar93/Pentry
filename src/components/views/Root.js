import React from "react";
import ThemeWrapper from "../wrappers/ThemeWrapper";
import AppContext from "../../context.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Main from "./Main";
import HomePentry from "./HomePentry";
import Details from "./Details";
import ShoppingList from "./ShoppingList";
import Modal from "../modals/Modal";
import { staticData } from "../../data/storage";

class Root extends React.Component {
  state = {
    data: staticData,
    shopList: [],
    modalOpened: false,
    modalFunction: null,
    modalParams: null,
  };

  componentDidMount() {
    const dataFromStorage = localStorage.getItem("myData");
    const parsedData = JSON.parse(dataFromStorage);

    if (parsedData) {
      this.setState({ data: parsedData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log("data state has changed. LocalStorage has been updated");
      localStorage.setItem("myData", JSON.stringify(this.state.data));
    }
  }

  toggleModal(callback, params) {
    this.setState({
      modalOpened: true,
      modalFunction: callback,
      modalParams: params,
    });
  }

  closeModal() {
    this.setState({
      modalOpened: false,
    });
  }

  addCategory(params) {
    let newData = [...this.state.data];
    newData.push({
      name: params.name,
      items: [],
    });

    this.setState({
      data: newData,
    });

    this.closeModal();
  }

  removeCategory() {
    const { item } = this.state.modalParams;
    this.setState((prevState) => ({
      data: [...prevState.data.filter((elem) => elem !== item)],
    }));

    this.closeModal();
  }

  addItem(params) {
    const { category } = this.state.modalParams;

    let index = this.state.data.findIndex((obj) => obj === category);
    let newData = [...this.state.data];
    let categoryData = newData[index].items;
    let newItem = { ...params };
    categoryData.push(newItem);

    this.setState({
      data: newData,
    });

    this.closeModal();
  }

  editItem(params) {
    const { item, category } = this.state.modalParams;
    let index = this.state.data.findIndex((obj) => obj === category);
    let newData = [...this.state.data];
    let categoryData = newData[index].items;
    let editingIndex = categoryData.findIndex(
      (elem) => elem.name === item.name
    );

    categoryData[editingIndex] = {
      name: params.name,
      amount: params.amount,
      minAmount: params.minAmount,
      type: params.type,
    };
    this.setState({
      data: newData,
    });

    this.closeModal();
  }

  removeItem() {
    const { item, category } = this.state.modalParams;

    let index = this.state.data.findIndex((obj) => obj === category);
    let newData = [...this.state.data];
    let categoryData = newData[index].items;
    let filteredData = categoryData.filter((elem) => elem.name !== item.name);
    newData[index].items = [...filteredData];

    this.setState({
      data: newData,
    });

    this.closeModal();
  }

  boughtItem(item) {
    let newData = [...this.state.data];

    // find category which contains item
    let itemCategory = {};
    newData.forEach((category) => {
      if (category.items.includes(item)) {
        itemCategory = category;
      }
    });

    let index = newData.findIndex((obj) => obj === itemCategory);
    let itemIndex = newData[index].items.findIndex((elem) => elem === item);

    newData[index].items[itemIndex] = {
      name: item.name,
      amount: item.minAmount,
      minAmount: item.minAmount,
      type: item.type,
    };

    this.setState({
      data: newData,
    });
  }

  render() {
    const { modalOpened, modalParams } = this.state;
    const contexElements = {
      ...this.state,
      toggleModal: this.toggleModal.bind(this),
      addCategory: this.addCategory.bind(this),
      removeCategory: this.removeCategory.bind(this),
      addItem: this.addItem.bind(this),
      editItem: this.editItem.bind(this),
      removeItem: this.removeItem.bind(this),
      closeModal: this.closeModal.bind(this),
      boughtItem: this.boughtItem.bind(this),
    };

    return (
      <ThemeWrapper>
        <AppContext.Provider value={contexElements}>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/storage" component={HomePentry} />
              <Route path="/storage/:category" component={Details} />
              <Route path="/list" component={ShoppingList} />
            </Switch>
          </BrowserRouter>
          {modalOpened && <Modal modalParams={modalParams} />}
        </AppContext.Provider>
      </ThemeWrapper>
    );
  }
}

export default Root;
