import { useState, useEffect } from 'react';
import OverView from './OverView/OverView';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import API from '../../config';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(prev => true);
    fetch(`${API.detail}/product/detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
    setIsLoading(prev => false);
  }, [params.id]);

  return (
    !isLoading && (
      <div>
        <h1>header</h1>
        <OverView product={product} />
        <OpenDetailView product={product} />
      </div>
    )
  );
}

export default DetailPage;
