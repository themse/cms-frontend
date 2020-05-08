import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CategoryNav } from '../../components/navigation/category';
import { fetchCategoryList } from '../../store/category/actions';

const mapStateToProps = ({ category: { list } }) => ({ categories: list });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchCategoryList,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav);
