import { atom } from "recoil";
import { tab } from "../constants";

const tabState = atom({
	key: 'selected tab',
	default: tab.latest
});

export default tabState