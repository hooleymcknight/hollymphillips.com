'use client'
import { useState } from 'react';
import reviews from '../data/reviews.json';
import { createMarkup } from '../helpers/helpers';

export default function Reviews() {
    const [activeReview, setActiveReview] = useState(false);

    return (
        <main className="max-w-[1000px] mx-auto relative">
            <h1 className="text-center">Reviews</h1>
            {
                !activeReview ? 
                    <ol>
                        {reviews.map(x =>
                            <li key={x.name}>
                                <button
                                    className="px-2 appearance-none block w-full text-left mb-4 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                                    onClick={() => { setActiveReview(x) }}
                                >
                                    <p>{x.name}</p>
                                    <span
                                        className="overflow-hidden max-h-[1lh] block text-ellipsis whitespace-nowrap"
                                        dangerouslySetInnerHTML={createMarkup(x.content)}
                                    >
                                        
                                    </span>
                                </button>
                            </li>
                        )}
                    </ol>
                :
                <> 
                    <div className="lined">
                        <span
                            className=""
                            dangerouslySetInnerHTML={createMarkup(activeReview.content)}
                        >
                        </span>
                    </div>
                    <button
                        onClick={() => { setActiveReview(false) }}
                        className="button button-inverse absolute left-0 mt-8"
                    >
                        Done
                    </button>
                </>
            }
        </main>
    );
}