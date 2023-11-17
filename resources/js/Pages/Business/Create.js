import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../../Shared/Layout';

const BusinessCreate = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            email: '',
            website: '',
            contact_person_name: '',
            phone_number: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().max(120, 'Must be 120 characters or less').required('Required'),
            address: Yup.string().max(1000, 'Must be 1000 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            contact_person_name: Yup.string().required('Required'),
            phone_number: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            try {
              await Inertia.post(route('business.store'), values);
            } catch (error) {
              console.error(error);
            }
        },
    });

    return (
        <Layout>
            <div>
                <h1>Create Business</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name && (
                            <div style={{ color: 'red' }}>{formik.errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="name">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        {formik.errors.address && (
                            <div style={{ color: 'red' }}>{formik.errors.address}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="name">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email && (
                            <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="name">Website:</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            onChange={formik.handleChange}
                            value={formik.values.website}
                        />
                        {formik.errors.website && (
                            <div style={{ color: 'red' }}>{formik.errors.website}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="name">Contact Person Name:</label>
                        <input
                            type="text"
                            id="contact_person_name"
                            name="contact_person_name"
                            onChange={formik.handleChange}
                            value={formik.values.contact_person_name}
                        />
                        {formik.errors.contact_person_name && (
                            <div style={{ color: 'red' }}>{formik.errors.contact_person_name}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="name">Phone Number:</label>
                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            onChange={formik.handleChange}
                            value={formik.values.phone_number}
                        />
                        {formik.errors.name && (
                            <div style={{ color: 'red' }}>{formik.errors.phone_number}</div>
                        )}
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default BusinessCreate;
