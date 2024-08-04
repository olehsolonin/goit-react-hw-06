import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { number } from 'yup';
import { useId } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

export default function ContactForm() {
  //   const contactState = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log('handleSubmit', values.name, values.number);

    dispatch(
      addContact({
        id: Date.now(),
        name: values.name,
        number: values.number,
      })
    );
    //  console.log(addContact);
    actions.resetForm();
  };

  const nameId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} className={css.field} />
        <ErrorMessage className={css.Error} name="name" component="span" />
        <label htmlFor={passwordId}>Number</label>
        <Field type="tel" name="number" id={passwordId} className={css.field} />
        <ErrorMessage className={css.Error} name="number" component="span" />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
