function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../../mockups/botoes', false, /\.(png|jpe?g|svg)$/));

export default function BotaoWrapper ({ImgName, ImgDesc = ""}) {
    return (
        <div onClick={() => console.log(ImgName)}>
            <img src={images[ImgName]} alt={ImgDesc} />
        </div>
    )
}