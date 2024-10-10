import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    SimpleGrid,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiChevronLeft,
    FiChevronRight,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from "react-icons/fi"


export default function Dashboard() {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    const [itemsPerPage] = useState(3); // Elementos por página
    const [currentPage, setCurrentPage] = useState(1)

    const LinkItems = [
        { name: 'Home', icon: FiHome },
        { name: 'Trending', icon: FiTrendingUp },
        { name: 'Explore', icon: FiCompass },
        { name: 'Favourites', icon: FiStar },
        { name: 'Settings', icon: FiSettings },
    ];


    const NavItem = ({ icon, children, ...rest }) => {
        return (
            <Box
                as="a"
                href="#"
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                    {...rest}>
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Box>
        );
    };

    const transactions = [
        {
            id: 1,
            name: "Amazon",
            category: "Electronic Devices",
            cashback: "+$2",
            amount: "-$242",
            date: "Apr 24, 2021 at 1:40pm",
            avatar: "amazon.jpeg"
        },
        {
            id: 2,
            name: "Starbucks",
            category: "Cafe and restaurant",
            cashback: "+$23",
            amount: "-$32",
            date: "Apr 22, 2021 at 2:43pm",
            avatar: "starbucks.png"
        },
        {
            id: 3,
            name: "YouTube",
            category: "Social Media",
            cashback: "+$4",
            amount: "-$112",
            date: "Apr 13, 2021 at 11:23am",
            avatar: "youtube.png"
        },
        {
            id: 4,
            name: "Amazon",
            category: "Electronic Devices",
            cashback: "+$2",
            amount: "-$242",
            date: "Apr 12, 2021 at 9:40pm",
            avatar: "amazon.jpeg"
        },
        {
            id: 5,
            name: "Starbucks",
            category: "Cafe and restaurant",
            cashback: "+$23",
            amount: "-$32",
            date: "Apr 10, 2021 at 2:10pm",
            avatar: "starbucks.png"
        },
        {
            id: 6,
            name: "YouTube",
            category: "Social Media",
            cashback: "+$4",
            amount: "-$112",
            date: "Apr 7, 2021 at 9:03am",
            avatar: "youtube.png"
        }
    ];

    // Calcular el índice de los primeros y últimos elementos de la página
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem); // Datos de la página actual
    const totalPages = Math.ceil(transactions.length / itemsPerPage);
    const currentTransactions = transactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Cambiar de página
    const nextPage = () => {
        if (currentPage < Math.ceil(transactions.length / itemsPerPage)) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <Flex
            h={[null, null, "90vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"

                >

                    <Heading
                        mt={50}
                        mb={[25, 50, 100]}
                        fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                        alignSelf="center"
                        letterSpacing="tight"
                    >
                        Rise.
                    </Heading>

                    <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                        <SimpleGrid columns={1} spacing={5}>
                            {LinkItems.map((link) => (
                                <NavItem key={link.name} icon={link.icon}>
                                    {link.name}
                                </NavItem>

                            ))}

                        </SimpleGrid>

                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="avatar-1.jpg" />
                        <Text textAlign="center">Calvin West</Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* PASGINAION */}
            <Flex
                w={["100%", "100%", "60%", "60%", "55%", "90%"]}
                p="2%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    Welcome back, <Flex display="inline-flex" fontWeight="bold">Calvin</Flex>
                </Heading>

                <Flex justifyContent="space-between" mt={4}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Productos</Heading>
                        <Text fontSize="small" color="gray" ml={4}>Apr 2021</Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex flexDir="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th>Name of transaction</Th>
                                    <Th>Category</Th>
                                    <Th isNumeric>Cashback</Th>
                                    <Th isNumeric>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {currentTransactions.map(transaction => (
                                    <Tr key={transaction.id}>
                                        <Td>
                                            <Flex align="center">
                                                <Avatar size="sm" mr={2} src={transaction.avatar} />
                                                <Flex flexDir="column">
                                                    <Heading size="sm" letterSpacing="tight">{transaction.name}</Heading>
                                                    <Text fontSize="sm" color="gray">{transaction.date}</Text>
                                                </Flex>
                                            </Flex>
                                        </Td>
                                        <Td>{transaction.category}</Td>
                                        <Td isNumeric>{transaction.cashback}</Td>
                                        <Td isNumeric><Text fontWeight="bold" display="inline-table">{transaction.amount}.00</Text></Td>
                                    </Tr>
                                ))}
                                {display === 'show' && (
                                    currentTransactions.map(transaction => (
                                        <Tr key={transaction.id}>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar size="sm" mr={2} src={transaction.avatar} />
                                                    <Flex flexDir="column">
                                                        <Heading size="sm" letterSpacing="tight">{transaction.name}</Heading>
                                                        <Text fontSize="sm" color="gray">{transaction.date}</Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>{transaction.category}</Td>
                                            <Td isNumeric>{transaction.cashback}</Td>
                                            <Td isNumeric><Text fontWeight="bold" display="inline-table">{transaction.amount}.00</Text></Td>
                                        </Tr>
                                    ))
                                )}
                            </Tbody>
                        </Table>
                    </Flex>

                    {/* Controles de paginación */}
                    <Flex justifyContent="space-between" mt={4}>
                        <IconButton
                            icon={<FiChevronLeft />}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            isDisabled={currentPage === 1}
                        />
                        <Text>
                            Page {currentPage} of {totalPages}
                        </Text>
                        <IconButton
                            icon={<FiChevronRight />}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            isDisabled={currentPage === totalPages}
                        />
                    </Flex>
                </Flex>

                <Flex align="center">
                    <Divider />
                    <IconButton
                        icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
                        onClick={() => {
                            if (display == 'show') {
                                changeDisplay('none')
                            } else {
                                changeDisplay('show')
                            }
                        }}
                    />
                    <Divider />
                </Flex>
            </Flex>
        </Flex>


    )
}