import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { VendorNav } from '../../components/navigation/vendor';
import { fetchVendorList } from '../../store/vendor/actions';

const mapStateToProps = ({ vendor: { list } }) => ({
    vendors: list,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchVendorList,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(VendorNav);
