import { atom } from "recoil";

const bestSnippetState = atom({
	key: 'bestSnippets',
	default: 'null'
});

export default bestSnippetState