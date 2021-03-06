import React, { Component } from 'react'
import { Modal, Button, Icon } from "antd";
import { EditOutlined } from '@ant-design/icons';
import EditForm from "../EditComponents/Renderedfrom"

class Modal1 extends React.Component {
  state = { visible: false };

  showModal = () => {
      console.log("huaa")
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        {/* <Button onClick={this.showModal}>
          Open Modal
        </Button> */}
        <EditOutlined onClick={this.showModal}  />
        {/* <Icon onClick={this.showModal} style={{ pointer: "cursor" }} type="edit" /> */}
        <Modal
          title="Basic Modal"
          width={800}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <EditForm/>
        </Modal>
      </div>
    );
  }
}

export default Modal1;
