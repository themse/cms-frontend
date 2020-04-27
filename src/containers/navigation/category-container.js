import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CategoryNav } from "../../components/navigation/category";
import { setCategoryListRequest } from "../../store/category/thunks";

const mapStateToProps = ({ category: { list } }) => ({ categories: list });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCategoryListRequest,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoryNav);
