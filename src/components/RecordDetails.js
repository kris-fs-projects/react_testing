import classNames from 'classnames';
import sharedStyles from '../SharedStyles.module.css';

const RecordDetails = ({ record }) => <div
  className={
    classNames({
      [sharedStyles.selected]: record,
      [sharedStyles.normal]: !record
    })
  }
>
  {
    record ? <>
      <p>{record?.title}</p>
      <p>{record?.year}</p>
    </> : <p>pick a record from the list</p>

  }
</div>;

export default RecordDetails;
