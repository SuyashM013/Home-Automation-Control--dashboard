import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { 
    Lamp,
    Palette
  } from 'lucide-react';

function Lighting() {

const [lights, setLights] = useState({
    living: { on: true, color: '#FFD700', brightness: 100 },
    kitchen: { on: true, color: '#FF4500', brightness: 100 },
    bedroom: { on: false, color: '#4169E1', brightness: 100 },
    room: { on: false, color: '#FF69B4', brightness: 100 }
  });

  const colors = [
      '#FFD700', // Warm Yellow
      '#FF8C00', // Warm Orange
      '#FF69B4', // Pink
      '#4169E1', // Royal Blue
      '#32CD32', // Lime Green
      '#8A2BE2', // Blue Violet
      '#FF4500', // Red Orange
    ];


    const rooms = [
        { name: 'Living Room', key: 'living', icon: Lamp },
        { name: 'Kitchen', key: 'kitchen', icon: Lamp },
        { name: 'Bedroom', key: 'bedroom', icon: Lamp },
        { name: 'All Rooms', key: 'room', icon: Lamp },

      ];

      const toggleLight = (room) => {
        setLights(prev => ({
          ...prev,
          [room]: { ...prev[room], on: !prev[room].on }
        }));
      };
    
      const setLightColor = (room, color) => {
        setLights(prev => ({
          ...prev,
          [room]: { ...prev[room], color }
        }));
      };

    

    return (
        <div>

            <Card className="shadow-lg hover:shadow-xl hover:scale-[101%] transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
                    <CardTitle className="text-xl font-semibold">Lighting</CardTitle>
                    <Lamp className="text-yellow-500" />
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {rooms.map(({ name, key, icon: Icon }) => (
                            <div key={key} className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            style={{ color: lights[key].on ? lights[key].color : '#9CA3AF' }}
                                            size={20}
                                        />
                                        <span>{name}</span>
                                    </div>
                                    <Switch
                                        checked={lights[key].on}
                                        onCheckedChange={() => toggleLight(key)}
                                    />
                                </div>
                                {lights[key].on && (
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <Palette size={16} className="text-gray-500" />
                                        <div className="flex gap-2">
                                            {colors.map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setLightColor(key, color)}
                                                    className="w-6 h-6 rounded-full border-2 transition-transform hover:scale-110"
                                                    style={{
                                                        backgroundColor: color,
                                                        borderColor: lights[key].color === color ? '#4B5563' : 'transparent'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default Lighting;