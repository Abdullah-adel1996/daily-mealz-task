import { DropdownButton, Dropdown  } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import styles from './Toolbar.module.scss';

const Toolbar = ({ handleSort, gamesTitles, searchText, handleSearch }) => {
    return (
        <div className={styles['toolbar']}>
            <Typeahead
                id="basic-typeahead-single"
                className={styles['toolbar-search']}
                labelKey="title"
                onChange={value => handleSearch(value)}
                options={gamesTitles}
                placeholder="Search for your game..."
                selected={searchText}
            />
            <DropdownButton id="dropdown-item-button" title="Sort by" variant='secondary' onSelect={handleSort}>
                <Dropdown.Item eventKey="title_asc">Title - A - Z</Dropdown.Item>
                <Dropdown.Item eventKey="title_desc">Title - Z - A</Dropdown.Item>
                <Dropdown.Item eventKey="score_desc">Score - Highest to Lowest</Dropdown.Item>
                <Dropdown.Item eventKey="score_asc">Score - Lowest to Highest</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default Toolbar;
