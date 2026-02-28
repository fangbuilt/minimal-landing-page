import { NavigationBar } from "./components/NavigationBar";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
    ${NavigationBar()}
    <main>
        <h1>Lessons and insights from 8 years</h1>
        <p>
        Where to grow your business as a photographer: site or social media?
        </p>
    </main>
`;
