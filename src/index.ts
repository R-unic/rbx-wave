const { sin } = math;

export default class Wave {
	public constructor(
		public amplitude = 1,
		public frequency = 1,
		public phaseShift = 0,
		public verticalShift = 0,
		public damping = 1,
		public waveFunction = sin
	) { }

	public update(dt: number): number {
		const wave = this.amplitude * this.waveFunction(this.frequency * os.clock() + this.phaseShift) + this.verticalShift;
		return (wave * dt) / this.damping;
	}
}