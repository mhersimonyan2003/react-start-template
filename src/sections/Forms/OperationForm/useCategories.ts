import { useEffect, useState } from 'react';
import { getCategories } from '@/api/categories';
import { Category } from '@/types';

export const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data: categories } = await getCategories();

      setCategories(categories.map((category) => ({ ...category, key: category.name, value: category.id })));
    };

    try {
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { categories, setCategories };
};
