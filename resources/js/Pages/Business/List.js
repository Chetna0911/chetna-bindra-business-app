import React from 'react';
import Layout from '../../Shared/Layout';

const BusinessList = ({ businesses }) => (
    <Layout>
        <div>
            <h1>Business List</h1>
            <ul>
                {businesses.map(business => (
                    <li key={business.id}>{business.name}</li>
                ))}
            </ul>
        </div>
    </Layout>
);

export default BusinessList;
