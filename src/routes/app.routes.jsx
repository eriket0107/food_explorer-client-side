import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { AddDish } from '../pages/AddDish';
import { Profile } from '../pages/Profile';
import { EditDish } from '../pages/EditDish';
import { FavoriteDish } from '../pages/FavoriteDish';

import { SearchProvider } from '../hooks/search';
import { DefaultLayout } from '../layouts/DefaultLayout';

export const AppRoutes = () => {
  return (
    <Routes>
      <SearchProvider>
        <Route element={<DefaultLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Dish />} path="/dish/:id" />
          <Route element={<AddDish />} path="/addDish" />
          <Route element={<Profile />} path="/profile/" />
          <Route element={<EditDish />} path="/editDish/:id" />
          <Route element={<FavoriteDish />} path="/favoriteDish/" />
        </Route>
      </SearchProvider>
    </Routes>
  );
};
