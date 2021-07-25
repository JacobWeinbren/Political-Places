import"../main.js";function o(o,l,r,c){const n=o.clone(),e=1<<n.level,t=n.col+l,w=n.row+r;return c&&t<0?(n.col=t+e,n.world-=1):t>=e?(n.col=t-e,n.world+=1):n.col=t,n.row=w,n}export{o as l};
