import React from "react";

import { cx } from "emotion";
import GlobalStyles from "../../GlobalStyles";
import Styles from "./HomeStyles";
import Template from "../Template/Template";

import Page from "../../types/Page";
import Button from "react-bootstrap/Button";

type Props = {};
type State = {};

export default class Home extends React.Component<Props, State> {

    render() {
        return (
            <Template currentPage={Page.HOME}>
                <div className={cx( Styles.welcomeWidget, "text-center" )}   >
                    <h1>👋 Hi! Welcome to Colandria...</h1>
                    <Button className={cx( GlobalStyles.coloredButton )} style={{ marginBottom: 10 }}>
                        Create an Account
                    </Button>
                    <Button className={cx( GlobalStyles.lightButton )}>
                        I have an Account
                    </Button>
                </div>
            </Template>
        )
    }

}