import React, {Component} from 'react'
import axios from "axios"
import mainStyle from "./styles/main.module.scss"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {FaChartBar} from "react-icons/fa"
import Grid from '@material-ui/core/Grid'
// import {keys} from "@material-ui/core/styles/createBreakpoints";

const {header, headerWrapper, img, mainCard, search, newCount, arrow, buttonStyles} = mainStyle



const SearchCountry = ({onChange}) => {
    return (
        <div style={{paddingTop: '10px'}}>
            <div className={search}>
                <input className='text'
                       type="text"
                       placeholder="Search countries by name, city and languages"
                       style={{overflow: 'hidden'}}
                       onChange={onChange}
                />
            </div>
            <div className={arrow} style={{textAlign: "center"}}>
                <a href='#countriesTable'><FaChartBar color='orange'/></a>
            </div>
        </div>
    )
}

const CountryCard = ({countries, onMouseOnHandler}) => {
    return countries.map((country) => {
            const languageOrLanguages =
                country.languages.length > 1 ? 'Languages' : 'Language'
            const formatLanguages = country.languages.map(({name}) => name).join(
                ', ')
            return (
                <Grid item xs={6} md={4} lg={3} xl={2} key={country.name}>
                    <div id={'country ' + country.numericCode}
                         className={'country ' + mainCard}
                         onMouseEnter={onMouseOnHandler} onMouseLeave={onMouseOnHandler}>
                        <img src={country.flag} className={img}
                             alt={country.name}/>
                        <div>
                            <p>{country.name}</p>
                            <p>Capital: {country.capital}</p>
                            <p>
                                {languageOrLanguages}: {formatLanguages}
                            </p>
                            <p>Population: {country.population.toLocaleString(
                                'en-IN')}</p>
                        </div>
                    </div>
                </Grid>

            )
        }
    )

}

const CountriesTable = ({countries}) => {
    const sortPopulation = (a, b) => a.population > b.population ? -1 : 1
    countries.sort(sortPopulation)
    const list = countries.slice(0, 9).map((element) => countryParsing(element, countries))
    return (
        <div>
            <h2 style={{textAlign: "center", fontWeight: 'bold', paddingBottom: 20}}>10 Most populated countries in the
                world</h2>
            <table style={{margin: 'auto', padding: 20}}>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>
    )
}

const LanguageTable = ({countries}) => {
    let languagesCount = {}
    countries.map((e) => e.languages.forEach((language) =>
        languagesCount.length === 0 ? languagesCount[language.name] = 1 : (
            Object.keys(languagesCount).includes(
                language.name) ? ++languagesCount[language.name] : languagesCount[language.name] = 1
        )))
    const list = Object.entries(languagesCount).sort((a, b) => b[1] - a[1])
        .slice(0, 9).map((element) => {
            const max = Math.max(...Object.values(languagesCount))
            const row = element[1] * 600 / max
            return (
                <tr key={element[0]}>
                    <td style={{textAlign:"center"}}>{element[0]}</td>
                    <td className="progress-bar"><span style={{backgroundColor: "orange", width: row}}></span></td>
                    <td  style={{textAlign:"center"}}>{element[1].toLocaleString("en-US")}</td>
                </tr>
            )
        })
    return (
        <div>
            <h2 style={{textAlign: "center", fontWeight: 'bold', paddingBottom: 20}}>10 Most populated languages in the
                world</h2>
            <table style={{margin: 'auto', padding: 20}}>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
        </div>
    )
}

const countryParsing = (e, b) => {
    const width = b.map((element) =>
        (element.population)
    )
    const max = Math.max(...width)
    const row = 600 * e.population / max
    return (
        <tr key={e.name}>
            <td style={{textAlign:"center"}}>{e.name}</td>
            <td className="progress-bar"><span style={{backgroundColor: "orange", width: row}}></span></td>
            <td style={{textAlign:"center"}}>{e.population.toLocaleString("en-US")}</td>
        </tr>
    )
}

const Table = ({onClick, isTrue}) => {
    return (
        <div style={{textAlign: "center"}} id='countriesTable'>
            <button className={buttonStyles} value='population' onClick={onClick}>Population</button>
            <button className={buttonStyles} value='language' onClick={onClick}>Languages</button>
        </div>
    )
}

class App extends Component {
    state = {
        countries: [],
        backUp: [],
        style: {
            transition: '1s',
        },
        transform: '',
        filter: '',
        isTrue: 'population',
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const API_URL = 'https://restcountries.eu/rest/v2/all'
        axios
            .get(API_URL)
            .then((response) => {
                this.setState({
                    countries: response.data,
                })
                let backUp = this.state.countries
                this.setState({backUp: backUp})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    onMouseOnHandler = (e) => {
        let style_normal = ''
        let style_transform = 'scale(1.05)'
        let transition = '1s'
        let transform = this.state.transform === '' ? style_transform : style_normal
        e.target.closest('.country').style.transform = transform
        e.target.closest('.country').style.transition = transition
        this.setState({transform})
    }

    onChange = (e) => {
        let filter = e.target.value.toLowerCase()
        let temp = []
        let element = document.getElementById('newCount')
        !(filter === '') ? element.style.display = 'block' : element.style.display = 'none'
        if (filter > '') {
            temp = this.state.backUp.filter(
                (e) => e.name.toLowerCase().includes(filter))
                .concat(this.state.backUp.filter(
                    (e) => e.capital.toLowerCase().includes(filter)))
            this.state.backUp.forEach((e) => {
                    e.languages.forEach((item) => {
                        if (item.name.toLowerCase().includes(filter)) temp.push(e)
                    })
                }
            )
            temp = temp.filter((item, pos) => temp.indexOf(item) === pos)
        } else {
            temp = this.state.backUp
        }
        this.setState({countries: temp})
    }

    changeHandle = (e) => {
        e.preventDefault()
        if (e.target.value === 'language') {
            this.setState({isTrue: 'language'})
        } else {
            this.setState({isTrue: 'population'})
        }
    }

    render() {
        return (
            <div className="App">
                <Header
                    backUp={this.state.backUp}
                    countries={this.state.countries}
                />
                <SearchCountry onChange={this.onChange}/>
                <Grid className='grid' container justify={'center'} spacing={5}>
                    <CountryCard
                        countries={this.state.countries}
                        onMouseOnHandler={this.onMouseOnHandler}/>
                </Grid>
                <Table onClick={this.changeHandle} isTrue={this.state.isTrue}/>
                {this.state.isTrue == 'population' ? <CountriesTable countries={this.state.backUp}/> :
                    <LanguageTable countries={this.state.backUp}/>}
                <Footer/>
            </div>
        )
    }
}

export default App