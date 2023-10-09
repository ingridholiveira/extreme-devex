import React, { useState } from "react";
import ReactDOM from "react-dom";

import {
  Form,
  SimpleItem,
  EmptyItem,
  GroupItem,
  TabbedItem,
  Tab,
} from "devextreme-react/form";
import { Popup } from "devextreme-react/popup";
import { DataGrid } from "devextreme-react/data-grid";

import "./styles.css";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="App">
      <h1>Devextreme Popup de Formulário Simples</h1>

      <button
        onClick={(e) => {
          setPopupVisible(true);
        }}
      >
        Open Popup
      </button>
      <EditForm
        visible={popupVisible}
        onHiding={() => {
          setPopupVisible(false);
        }}
      />
    </div>
  );
}

function EditForm(props) {
  return (
    <Popup
      visible={props.visible}
      showTitle={false}
      fullScreen={true}
      toolbarItems={[
        {
          toolbar: "bottom",
          location: "after",
          widget: "dxButton",
          options: {
            text: "Save",
            onClick() {},
          },
        },
        {
          toolbar: "bottom",
          location: "after",
          widget: "dxButton",
          options: {
            text: "Cancel",
            onClick() {
              //self.form.dispose()
              props.onHiding();
            },
          },
        },
      ]}
    >
      <Form colCount={1} labelLocation={"top"} scrollingEnabled={true}>
        <TabbedItem>
          <Tab title="Detalhes do cliente" colCount={3}>
            <SimpleItem label={{ text: "Nome" }} dataField="firstName" />
            <SimpleItem label={{ text: "Sobrenome" }} dataField="lastName" />

            <SimpleItem label={{ text: "Contato" }} dataField="mobile" />

            <SimpleItem
              label={{ text: "Endereço", location: "left" }}
              dataField="street"
            />
            <SimpleItem
              label={{ text: "Cidade", location: "left" }}
              dataField="cityId"
            />
            <SimpleItem
              label={{ text: "C.E.P.", location: "left" }}
              dataField="postalCode"
            />
            <SimpleItem
              label={{ text: "Email", location: "top" }}
              dataField="email"
            />
            <EmptyItem />
            <EmptyItem />

            <SimpleItem
              label={{ text: "Pointos acumulados" }}
              dataField="points"
            />
          </Tab>
          <Tab title="Detalhes do cliente" colCount={3}>
            <SimpleItem label={{ text: "Nome" }} dataField="firstName_b" />
            <SimpleItem label={{ text: "Sobrenome" }} dataField="lastName_b" />

            <SimpleItem label={{ text: "Contato" }} dataField="mobile_b" />

            <SimpleItem
              label={{ text: "Endereço", location: "left" }}
              dataField="street_b"
            />
            <SimpleItem
              label={{ text: "Cidade", location: "left" }}
              dataField="cityId_b"
            />
            <SimpleItem
              label={{ text: "CEP", location: "left" }}
              dataField="postalCode_b"
            />

            <SimpleItem
              label={{ text: "Email", location: "top" }}
              dataField="email_b"
            />
            <EmptyItem />
            <EmptyItem />

            <SimpleItem
              label={{ text: "Pointos acumulados" }}
              dataField="points"
            />
          </Tab>
          <Tab title="Histórico">
            <DataGrid />
          </Tab>
        </TabbedItem>
      </Form>
    </Popup>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
