'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Container,
  Button,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const BlogTags = ({ tags }) => {
  return (
    <HStack spacing={2}>
      {tags.map((tag) => (
        <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

const BlogAuthor = ({ date, name }) => {
  return (
    <HStack marginTop="2" spacing="2" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${name}`}
      />
      <Text fontWeight="medium">{name}</Text>
      <Text>—</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 2; // Número de productos por página
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Función para obtener productos
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/Productos'); // Cambia esto según tu API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = currentPage * productsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" mb="6">Product List</Heading>

      {currentProducts.map((product, index) => (
        <Box
          key={index}
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Image
                borderRadius="lg"
                src={product.imagenUrl} // URL de la imagen
                alt={product.nombre}
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <BlogTags tags={product.tags || []} /> {/* Si hay tags */}
            <Heading marginTop="1">{product.nombre}</Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              {product.descripcion}
            </Text>

            {/* Mostrar producto con variaciones */}
            {product.Variacions ? (
              <VStack align="start" marginTop="3">
                {product.Variacions.map((variacion, idx) => (
                  <Box key={idx} borderWidth="1px" borderRadius="lg" p="4" width="100%">
                    <Text><strong>Color:</strong> {variacion.color}</Text>
                    <Text><strong>Tamaño:</strong> {variacion.tamaño}</Text>
                    <Text><strong>Precio:</strong> ${variacion.precio}</Text>
                    <Text><strong>Stock:</strong> {variacion.stock}</Text>
                  </Box>
                ))}
              </VStack>
            ) : (
              // Mostrar producto sin variaciones
              <Box marginTop="3">
                <Text><strong>Precio:</strong> ${product.precio}</Text>
                <Text><strong>Stock:</strong> {product.stock}</Text>
              </Box>
            )}

            <BlogAuthor name="Author Name" date={new Date()} /> {/* Cambia según tus necesidades */}
          </Box>
        </Box>
      ))}

      <HStack spacing={4} marginTop="5" justifyContent="center">
        <Button onClick={handlePrevPage} isDisabled={currentPage === 0}>
          {'<'} Anterior
        </Button>
        <Button onClick={handleNextPage} isDisabled={currentPage === totalPages - 1}>
          Siguiente {'>'}
        </Button>
      </HStack>

      <Divider marginTop="5" />
    </Container>
  );
};

export default ArticleList;
