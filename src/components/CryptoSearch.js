import React from 'react';

function CryptoSearch({search, change, submit}) {
    return (
        <div>
            <form
                onSubmit={submit}
                className="crypto-form"
            >
                <input
                    type="text"
                    placeholder="Search crypto..."
                    value={search}
                    onChange={change}
                />
                <input
                    type="submit"
                />

            </form>
        </div>
    );
}

export default CryptoSearch;