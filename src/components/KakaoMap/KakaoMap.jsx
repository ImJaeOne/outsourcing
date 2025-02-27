import React, { useState, useEffect } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { getUserLocation } from '../../utils/getUserLocation';

const KakaoMap = ({ level, mode, productList }) => {
  const [location, setLocation] = useState({ lat: 33.450701, lng: 126.570667 });
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((coords) => setLocation(coords))
      .catch((error) => console.error(error));
  }, []);

  const handleClickProduct = (product) => {
    setProductInfo(product);
  };

  const handleClickMap = () => {
    setProductInfo(null);
  };

  return (
    <div className="w-full h-full">
      <Map
        center={location}
        level={level}
        style={{ width: '100%', height: '100%' }}
        onClick={handleClickMap}
      >
        <MapMarker
          position={location} // ip 기반으로 현재 내 위치 지정
          image={{
            src: 'https://cdn-static.zep.us/static/assets/baked-avartar-images/10-35-3-253.png', // 프로필 사진 들어갈 예정
            size: {
              width: 39,
              height: 39,
            },
            options: {
              offset: {
                x: 27,
                y: 69,
              },
            },
          }}
        ></MapMarker>
        {mode === 'productList' &&
          productList.map((product) => (
            <div key={product.id}>
              <MapMarker
                position={product.location}
                onClick={() => handleClickProduct(product)}
              />
              {productInfo && productInfo.id === product.id && (
                <CustomOverlayMap position={product.location} yAnchor={1.4}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px',
                      backgroundColor: '#fff',
                      border: '2px solid rgb(85 204 201)',
                      borderRadius: '15px',
                      color: '#000',
                      textAlign: 'center',
                      minWidth: '120px',
                    }}
                  >
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      {product.name}
                    </div>
                    <div style={{ color: '#666', marginBottom: '5px' }}>
                      {Number(product.price).toLocaleString()}원
                    </div>
                    <div style={{ fontSize: '12px', color: '#888' }}>
                      {product.users.name}{' '}
                      {new Date(product.createdAt)
                        .toISOString()
                        .slice(2, 10)
                        .replace(/-/g, '.')}
                    </div>
                  </div>
                </CustomOverlayMap>
              )}
            </div>
          ))}
      </Map>
    </div>
  );
};

export default KakaoMap;
