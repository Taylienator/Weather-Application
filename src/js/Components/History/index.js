import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store){
    console.log('looking for',store);
    return{
    searchHistory: store.search.searchHistory
    };
}


export default connect(mapStoreToProps)(History);