import * as React from 'react';
import { HomeComponent } from './home.component';
import { useHome } from './home.hook';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../core';
import { useDebouncedText } from '../../common/hooks';

export const HomeContainer = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = React.useState<string>('');

  const { debouncedText } = useDebouncedText(searchValue, 500);
  const { products } = useHome(debouncedText);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleSeeDetails = (productId: string) => {
    navigate(`${ROUTES.DETAILS}/${productId}`);
  };

  return <HomeComponent products={products} onSearch={handleSearch} onSeeDetails={handleSeeDetails} />;
};
