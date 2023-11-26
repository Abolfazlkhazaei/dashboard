import React from 'react';
import { Card, Metric, Text , BadgeDelta ,Flex } from "@tremor/react";


const CardItem = () => {
    return (
        <div>
            <Card className="w-xs" decoration="top" decorationColor="indigo">
                <Flex justifyContent='between' alignItems='center'>
                     <Text className='ml-2'>Sales</Text>
                    <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
                </Flex>
                <Metric>$ 34,743</Metric>
            </Card>
            
        </div>
    );
};

export default CardItem;