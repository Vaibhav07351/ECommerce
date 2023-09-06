import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { CartProvider } from "./Context/CartContext";
// import {useAuth0, Auth0Provider} from 'react-native-auth0';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// {/* <Auth0Provider domain={"dev-4nu40leq2ns86xrl.us.auth0.com"} clientId={"fIbwGo8o7pkg6AflDnurExIZsi1dZvl2"}> */}
   <BrowserRouter> 
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </BrowserRouter>
// </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
