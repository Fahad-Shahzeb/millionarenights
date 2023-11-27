import React from 'react';
import cryptonews from './cryptonews.svg';
import coincierge from './coincierge.svg';
import coinspeaker from './coinspeaker.svg';
import cointelegraph from './cointelegraph.svg';

interface Props {
}

const MainHeadings: React.FC<Props> = (props) => {
    const renderSVG = (svg: string, key: number) => (
        <div key={key} style={{ margin: '10px' }} dangerouslySetInnerHTML={{ __html: svg }} />
    );

    const allSVGs = [cryptonews, coincierge, coinspeaker, cointelegraph];

    return (
        <div>
            {allSVGs.map((svg, index) => renderSVG(svg, index))}
        </div>
    );
};

export { MainHeadings };
