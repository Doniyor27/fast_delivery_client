import SuggestionTable from '../../components/SuggestionTable/suggestiontable.jsx'

import './Suggestions.css'

const Suggest = () => {
    return (
      <div className="suggestions-wrapper">
        <h2 className="suggestions-heading">Taklif va shikoyatlar</h2>
        <SuggestionTable/>
      </div>
    )
  }
  
  export default Suggest