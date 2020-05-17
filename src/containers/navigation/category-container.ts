import { connect } from 'react-redux';

import { CategoryNav } from '../../components/navigation/category';
import { RootState } from '../../store/types';
import { categoryListSelector } from '../../store/category/selectors';

const mapStateToProps = (state: RootState) => ({ categories: categoryListSelector(state) });

export type CategoryNavProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(CategoryNav);
