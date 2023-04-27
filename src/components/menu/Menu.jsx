import { useRecoilState } from 'recoil'
import './Menu.css'
import { tab } from '../../constants.js'
import tabState from '../../atoms/selectedTab'

const Menu = () => {
	const [selectedTab, setSelectedTab] = useRecoilState(tabState)

	return (
		<>
			<section className="menu component">
				<button onClick={() => setSelectedTab(tab.latest)} className={selectedTab === tab.latest ? tab.selected : ''}> Latest </button>
				<button onClick={() => setSelectedTab(tab.upvotes)} className={selectedTab === tab.upvotes ? tab.selected : ''}> Best </button>
				<button onClick={() => setSelectedTab(tab.upload)} className={selectedTab === tab.upload ? tab.selected : ''}> Upload new </button>
			</section>
			<hr />
		</>
	)
}

// Extra övning: ändra så att knapparna genereras med map-funktionen
// [tab.latest, tab.upvotes, tab.upload]

export default Menu
