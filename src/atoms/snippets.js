import { atom } from "recoil";

const snippetState = atom({
	key: 'latestSnippets',
	default: 'null'
});

export default snippetState