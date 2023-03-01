export class MobileModel {

    public battery_power: number;
    public blue: number;
    public clock_speed: number;
    public dual_sim: number;
    public fc: number;
    public four_g: number;
    public int_memory: number;
    public m_dep: number;
    public mobile_wt: number;
    public n_cores: number;
    public pc: number;
    public px_height: number;
    public px_width: number;
    public ram: number;
    public sc_h: number;
    public sc_w: number;
    public talk_time: number;
    public three_g: number;
    public touch_screen: number;
    public wifi: number;
    public price_range: number;

    constructor(
        battery_power: number,
        blue: number,
        clock_speed: number,
        dual_sim: number,
        fc: number,
        four_g: number,
        int_memory: number,
        m_dep: number,
        mobile_wt: number,
        n_cores: number,
        pc: number,
        px_height: number,
        px_width: number,
        ram: number,
        sc_h: number,
        sc_w: number,
        talk_time: number,
        three_g: number,
        touch_screen: number,
        wifi: number,
        price_range: number
    ) {
        this.battery_power = battery_power;
        this.blue = blue;
        this.clock_speed = clock_speed;
        this.dual_sim = dual_sim;
        this.fc = fc;
        this.four_g = four_g;
        this.int_memory = int_memory;
        this.m_dep = m_dep;
        this.mobile_wt = mobile_wt;
        this.n_cores = n_cores;
        this.pc = pc;
        this.px_height = px_height;
        this.px_width = px_width;
        this.ram = ram;
        this.sc_h = sc_h;
        this.sc_w = sc_w;
        this.talk_time = talk_time;
        this.three_g = three_g;
        this.touch_screen = touch_screen;
        this.wifi = wifi;
        this.price_range = price_range
    }
}
