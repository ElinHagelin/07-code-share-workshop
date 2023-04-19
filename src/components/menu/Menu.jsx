import './Menu.css'
import { tab } from '../../constants.js'

const Menu = ({ selected, setSelected }) => (
	<>
		<section className="menu component">
			<button onClick={() => setSelected(tab.latest)} className={selected === tab.latest ? tab.selected : ''}> Latest </button>
			<button onClick={() => setSelected(tab.upvotes)} className={selected === tab.upvotes ? tab.selected : ''}> Best </button>
			<button onClick={() => setSelected(tab.upload)} className={selected === tab.upload ? tab.selected : ''}> Upload new </button>
		</section>
		<hr />
	</>
)

// Extra övning: ändra så att knapparna genereras med map-funktionen
// [tab.latest, tab.upvotes, tab.upload]

export default Menu
