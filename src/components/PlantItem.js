import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item' onClick={(e) => handleClick(name,e)}>
			<img className='lmj-plant-item-cover ' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
function handleClick(plantName,e) {
    console.log('✨ Ceci est mon event :${plantName}',e) /* ici pas moyen d'afficher*/
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨ ${e.type}`)
}
export default PlantItem
