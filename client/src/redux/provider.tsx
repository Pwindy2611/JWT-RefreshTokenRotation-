"use client";
import { store, perSisTor } from "./store";
import { Provider } from "react-redux";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Header from "@/components/partialView/header";
import Footer from "@/components/partialView/footer";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={perSisTor}>
                    <Header />
                    <div className="content">
                        {children}
                    </div>
                    <Footer />
            </PersistGate>
        </Provider>
    );
}
