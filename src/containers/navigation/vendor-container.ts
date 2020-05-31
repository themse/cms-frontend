import { connect } from 'react-redux';

import { VendorNav } from '../../components/navigation/vendor';
import { RootState } from '../../store/types';

const mapStateToProps = ({ vendor: { list } }: RootState) => ({
    vendors: list,
});

export type VendorNavProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(VendorNav);
