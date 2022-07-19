// const Component: FC = () => {
//     const { error, data, loading } = useQuery(SomeQuery);
//
//     if (loading) return <Spinner />
//     if (error) return <ErrorInfo error={error} />
//
//     const [selectedItem, setSelectedItem] = useState<string |null>(null);
//
//     return (
//         <>
//             {data.items.map(item =>
//                 <Item
//                     key={item.id}
//                     item={item}
//                     selected={selectedItem === item.id}
//                     onSelect={() => setSelectedItem(item.id)}
//                 />
//             }
//         </>
//     );
// };

export {};