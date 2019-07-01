import {} from "rxjs";
import {} from "rxjs/webSocket";
import {} from "rxjs/operators";
import "./styles.css";

const WS_URL = "wss://echo.websocket.org";

const connectBtn = document.querySelector("#connect");
const disconnectBtn = document.querySelector("#disconnect");
const input: HTMLInputElement = document.querySelector("input");
const send = document.querySelector("#send");
const log: HTMLTextAreaElement = document.querySelector("#log");
