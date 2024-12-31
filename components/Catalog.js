// src/components/Catalog.js
import React, { useState } from 'react';
import PersonalCatalog from './PersonalCatalog';
import BlogCatalog from './BlogCatalog';
import './Catalog.css';

function Catalog() {
    const [activeComponent, setActiveComponent] = useState('personal');

    return (
        <div >
            <div className="catalog-base">
                <nav className="catalog-nav">
                    <button onClick={() => setActiveComponent('personal')}>Myself</button>
                    <button onClick={() => setActiveComponent('blog')}>Blog</button>
                </nav>
            </div>
            <div className="catalog-content">
                {activeComponent === 'personal' && <PersonalCatalog />}
                {activeComponent === 'blog' && <BlogCatalog />}
            </div>
        </div>
    );
}

export default Catalog;