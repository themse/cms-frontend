import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { VendorNav } from "../../components/navigation/vendor";
import { setVendorListRequest } from "../../store/vendor/thunks";

const mapStateToProps = ({ vendor: { list } }) => ({
  vendors: list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setVendorListRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(VendorNav);
