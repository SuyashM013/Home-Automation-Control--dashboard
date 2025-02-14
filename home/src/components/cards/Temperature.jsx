import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { 
    Thermometer,
  } from 'lucide-react';

function Temperature() {
     const [temperature, setTemperature] = useState(72);
    return (
        <div className='' >

            <Card className="shadow-lg hover:shadow-xl hover:scale-[101%] transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl font-semibold">AC - Temperature</CardTitle>
                    <Thermometer className="text-blue-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold text-black-800 mb-4">
                        {temperature}°F
                    </div>
                    <Slider
                        value={[temperature]}
                        onValueChange={(value) => setTemperature(value[0])}
                        max={85}
                        min={65}
                        step={1}
                        className="w-full"
                    />
                </CardContent>
            </Card>

        </div>
    )
}

export default Temperature