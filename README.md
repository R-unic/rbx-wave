# Wave
A sine/cosine wave implementation for Roblox

```ts
import { RunService } from "@rbxts/services";

const wave = new Wave;
RunService.RenderStepped.Connect(dt => {
  const n = wave.update(dt);
  print(n);
});
```