import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  Fan,
  DoorOpen,
  Music,
  Power
} from 'lucide-react';

function Devices() {

    const [devices, setDevices] = useState({
        fan: { on: false, speed: 2 },
        music: false,
        door: true
      });
    
    
      const toggleDevice = (device) => {
        setDevices(prev => ({
          ...prev,
          [device]: typeof prev[device] === 'object' 
            ? { ...prev[device], on: !prev[device].on }
            : !prev[device]
        }));
      };
    
      const setFanSpeed = (speed) => {
        setDevices(prev => ({
          ...prev,
          fan: { ...prev.fan, speed }
        }));
      };

    return (
        <div>

            <Card className="shadow-lg hover:shadow-xl hover:scale-[101%] transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-xl font-semibold">Devices</CardTitle>
                    <Power className="text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Fan className={devices.fan.on ? "text-green-500" : "text-gray-400"} size={20} />
                                    <span>Fan</span>
                                </div>
                                <Switch
                                    checked={devices.fan.on}
                                    onCheckedChange={() => toggleDevice('fan')}
                                />
                            </div>
                            {devices.fan.on && (
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>Speed: {devices.fan.speed}</span>
                                        <span className="text-xs">(1-5)</span>
                                    </div>
                                    <Slider
                                        value={[devices.fan.speed]}
                                        onValueChange={(value) => setFanSpeed(value[0])}
                                        max={5}
                                        min={1}
                                        step={1}
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Music className={devices.music ? "text-green-500" : "text-gray-400"} size={20} />
                                <span>Music System</span>
                            </div>
                            <Switch
                                checked={devices.music}
                                onCheckedChange={() => toggleDevice('music')}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <DoorOpen className={devices.door ? "text-green-500" : "text-gray-400"} size={20} />
                                <span>Smart Lock</span>
                            </div>
                            <Switch
                                checked={devices.door}
                                onCheckedChange={() => toggleDevice('door')}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default Devices