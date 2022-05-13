import { useState } from 'react';


function Translate() {

  const [Lang, setLang] = useState("");

  const [Word, setWord] = useState("");

  const [Res, setRes] = useState([]);

const encodedParams = new URLSearchParams();
encodedParams.append("q", `${Word}`);
encodedParams.append("target", `${Lang}`);
encodedParams.append("source", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': 'f98d2bb766mshef7f4292987205ap1ddfcdjsnb747ec34618e'
	},
	body: encodedParams
};

const apifunc = (event) => {
  event.preventDefault()
fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then((response) => 
    {
    let resp = response.data.translations[0];
    
    setRes(resp)
  })
	.catch(err => console.error(err));
} 


  const handleChange = (event) => {
    setLang(event.target.value);
    event.preventDefault();
  };

  const handleFormChange = (event) => {
    setWord(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="wrap">
      <form onSubmit={apifunc}>
        <label className="form-sep">
          <select value={Lang} onChange={handleChange}>
            <option value="af">Afrikaans af</option>
            <option value="sq">Albanian sq</option>
            <option value="am">Amharic am</option>
            <option value="ar"> Arabic ar </option>
            <option value="hy">Armenian hy</option>
            <option value="az">Azerbaijani az</option>
            <option value="eu">Basque eu</option>
            <option value="be">Belarusian be</option>
            <option value="bn">Bengali bn</option>
            <option value="bs">Bosnian bs</option>
            <option value="bg">Bulgarian bg</option>
            <option value="ca">Catalan ca</option>
            <option value="ceb"> Cebuano ceb</option>
            <option value="zh-CN"> Chinese (Simplified) zh-CN</option>
            <option value="zh-TW">Chinese (Traditional) zh-TW</option>
            <option value="co"> Corsican co</option>
            <option value="hr">Croatian hr</option>
            <option value="cs">Czech cs</option>
            <option value="da">Danish da</option>
            <option value="nl">Dutch nl</option>
            <option value="en">English en </option>
            <option value="eo">Esperanto eo</option>
            <option value="et">Estonian et</option>
            <option value="fi">Finnish fi</option>
            <option value="fr"> French fr</option>
            <option value="fy"> Frisian fy</option>
            <option value="gl">Galician gl</option>
            <option value="ka"> Georgian ka</option>
            <option value="de">German de </option>
            <option value="el">Greek el </option>
            <option value="gu"> Gujarati gu </option>
            <option value="ht">Haitian Creole ht</option>
            <option value="ha"> Hausa ha</option>
            <option value="haw"> Hawaiian haw</option>
            <option value="he">Hebrew he</option>
            <option value="hi"> Hindi hi</option>
            <option value="hmn">Hmong hmn</option>
            <option value="hu">Hungarian hu</option>
            <option value="is">Icelandic is</option>
            <option value="ig">Igbo ig</option>
            <option value="id">Indonesian id</option>
            <option value="ga">Irish ga</option>
            <option value="it">Italian it</option>
            <option value="ja">Japanese ja</option>
            <option value="jw">Javanese jw</option>
            <option value="kn">Kannada kn</option>
            <option value="kk">Kazakh kk</option>
            <option value="km">Khmer km</option>
            <option value="ko">Korean ko</option>
            <option value="ku">Kurdish ku</option>
            <option value="ky">Kyrgyz ky</option>
            <option value="lo">Lao lo</option>
            <option value="la">Latin la</option>
            <option value="lv">Latvian lv</option>
            <option value="lt">Lithuanian lt</option>
            <option value="lb">Luxembourgish lb</option>
            <option value="mk">Macedonian mk</option>
            <option value="mg">Malagasy mg</option>
            <option value="ms">Malay ms</option>
            <option value="ml">Malayalam ml</option>
            <option value="mt">Maltese mt</option>
            <option value="mi">Maori mi</option>
            <option value="mr">Marathi mr</option>
            <option value="mn">Mongolian mn</option>
            <option value="my">Myanmar (Burmese) my </option>
            <option value="ne">Nepali ne</option>
            <option value="no"> Norwegian no</option>
            <option value="ny">Nyanja (Chichewa) ny</option>
            <option value="ps">Pashto ps</option>
            <option value="fa">Persian fa</option>
            <option value="pl">Polish pl</option>
            <option value="pt">Portuguese (Portugal, Brazil) pt</option>
            <option value="pa">Punjabi pa</option>
            <option value="ro">Romanian ro</option>
            <option value="ru">Russian ru</option>
            <option value="sm">Samoan sm</option>
            <option value="gd">Scots Gaelic gd</option>
            <option value="sr">Serbian sr</option>
            <option value="st">Sesotho st</option>
            <option value="sn">Shona sn</option>
            <option value="sd"> Sindhi sd</option>
            <option value="si"> Sinhala (Sinhalese) si</option>
            <option value="sk">Slovak sk</option>
            <option value="sl"> Slovenian sl</option>
            <option value="so">Somali so</option>
            <option value="es">Spanish es</option>
            <option value="su">Sundanese su</option>
            <option value="sw">Swahili sw</option>
            <option value="sv">Swedish sv </option>
            <option value="tl">Tagalog (Filipino) tl</option>
            <option value="tg">Tajik tg</option>
            <option value="ta">Tamil ta</option>
            <option value="te">Telugu te</option>
            <option value="th">Thai th</option>
            <option value="tr">Turkish tr</option>
            <option value="uk">Ukrainian uk</option>
            <option value="ur">Urdu ur</option>
            <option value="uz">Uzbek uz</option>
            <option value="vi">Vietnamese vi</option>
            <option value="cy">Welsh cy</option>
            <option value="xh">Xhosa xh</option>
            <option value="yi">Yiddish yi</option>
            <option value="yo">Yoruba yo</option>
            <option value="zu">Zulu zu</option>
          </select>

          <input
            type="text"
            className="form-control"
            placeholder="Translate a word..."
            value={Word}
            onChange={handleFormChange}
            required
          />
        </label>
      </form>
      <div className="translated">Translated word is: {Res.translatedText}</div>
    </div>
  );
}

export default Translate;