import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../contexts/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage: React.FC = () => {
    const { state: { term } } = useStateValue();
    // LIVE API CALL
    // const { data } = useGoogleSearch(term);
    const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Google" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage_options">

                    </div>
                </div>
            </div>
            <div className="searchPage__results">
            </div>
        </div>
    );
};

export default SearchPage;
