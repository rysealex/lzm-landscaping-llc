import lawnCareImg from '../gallery/gallery-8.png';
import treeTrimmingImg from '../gallery/new-tree-trim.png';
import cleanupsImg from '../gallery/cleanup-after.png';
import hardscapingImg from '../gallery/gallery-23.png';
import sprinklersImg from '../gallery/gallery-6.png';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
}

const baseServices: Record<string, ServiceDetail> = {
  'lawn-care': {
    id: 'lawn-care',
    slug: 'lawn-care',
    title: 'Lawn Care & Garden Maintenance',
    heroSubtitle: 'Lawn Mowing, Edging, Fertilization & Full-Service Turf Care',
    shortDesc: 'Routine lawn mowing, sharp edging, fertilization, weed control, mulching, patch regrowth, brush trimming, and pruning tailored to Pacific Northwest yards.',
    metaTitle: 'Lawn Care & Garden Maintenance | LZM Landscaping LLC | Gig Harbor & Tacoma',
    metaDescription: 'Professional lawn mowing, fertilization, weed control, and garden maintenance in Gig Harbor & Tacoma WA. Call LZM Landscaping LLC at (253) 358-5125.',
    image: lawnCareImg,
    features: [
      'Scheduled lawn mowing with crisp border edging',
      'Seasonal turf fertilization for strong root development',
      'Targeted weed management and moss suppression',
      'Bark and mulch installation for garden beds',
      'Lawn patch regrowth and bare spot treatment',
      'Hedge, shrub, and brush trimming & pruning'
    ],
    benefits: [
      'Eliminates weeds, bare patches, and Pacific Northwest lawn moss',
      'Saves you hours of demanding yard work every weekend',
      'Significantly boosts your property’s curb appeal and neighborhood presence',
      'Promotes thick turf that naturally resists summer drought and pests'
    ],
    processSteps: [
      { title: 'Free Property Walkthrough', desc: 'We inspect your lawn health, square footage, and property requirements to create an ideal maintenance schedule.' },
      { title: 'Turf Prep & Clearing', desc: 'We clear debris and sticks to ensure clean, even mowing and protect turf blades.' },
      { title: 'Mowing & Crisp Edging', desc: 'Precision equipment cuts cleanly at ideal seasonal heights, followed by sharp mechanical line edging.' },
      { title: 'Immaculate Cleanup', desc: 'All hard surfaces, driveways, and walkways are blown clean of clippings.' }
    ],
    faqs: [
      { question: 'How often should my lawn be mowed in Gig Harbor / Tacoma?', answer: 'During peak spring and early summer growing seasons, weekly service is recommended. Bi-weekly service is typical in late summer and autumn.' },
      { question: 'Do you offer one-time lawn mowings or ongoing contracts?', answer: 'We offer both flexible one-time mowings for overgrown yards and dependable ongoing maintenance schedules.' },
      { question: 'Are estimates free?', answer: 'Yes! Call or text (253) 358-5125 for a 100% free, no-obligation estimate.' }
    ]
  },

  'tree-service': {
    id: 'tree-service',
    slug: 'tree-service',
    title: 'Tree Service & Trimming',
    heroSubtitle: 'Tree Maintenance, Branch Pruning, Stump Removal & Hauling',
    shortDesc: 'From specialized maintenance to complete site clearing, we offer a full range of tree services including fruit tree winter prep, stump removal, branch pruning, and debris hauling.',
    metaTitle: 'Tree Service & Trimming | LZM Landscaping LLC | Gig Harbor & Tacoma WA',
    metaDescription: 'Expert tree trimming, winter fruit tree prep, branch removal, stump removal, and debris hauling in Gig Harbor and Pierce County. Call (253) 358-5125.',
    image: treeTrimmingImg,
    features: [
      'Winter preparation and structural pruning for fruit trees',
      'Safe branch removal and canopy thinning',
      'Tree stump removal and ground clearing',
      'Hazardous overhanging limb cutting',
      'Full debris chipping and complete haul-away'
    ],
    benefits: [
      'Protects your home, roof, and fence lines from falling storm branches',
      'Improves tree health and boosts fruit yield with proper seasonal pruning',
      'Opens up sunlight to flower beds, turf, and outdoor living areas',
      'Leaves your property clean and hazard-free'
    ],
    processSteps: [
      { title: 'Tree & Site Assessment', desc: 'We inspect tree health, growth structure, nearby structures, and utility lines to plan safe cutting.' },
      { title: 'Safe Cutting & Pruning', desc: 'We carefully trim limbs and branches using professional tools and controlled lowering techniques.' },
      { title: 'Stump Grinding / Removal', desc: 'We remove or grind unwanted stumps below turf level so you can plant or turf over the area.' },
      { title: 'Haul-Away & Rake Clean', desc: 'All branches, logs, and sawdust are fully hauled away, leaving your property pristine.' }
    ],
    faqs: [
      { question: 'When is the best time to prune fruit trees in Western Washington?', answer: 'Late winter to very early spring (while trees are still dormant) is the ideal time for fruit tree pruning in the Pacific Northwest.' },
      { question: 'Can you haul away the wood and branches?', answer: 'Yes! Full haul-away and disposal is included in every tree trimming and service project.' },
      { question: 'How do I request a tree service quote?', answer: 'Call or text Luis at (253) 358-5125 for a fast, free on-site estimate.' }
    ]
  },

  'cleanups': {
    id: 'cleanups',
    slug: 'cleanups',
    title: 'General Cleanups',
    heroSubtitle: 'Property Restorations, Bed Cleanups, Debris Hauling & Mulching',
    shortDesc: 'Wanting to clean up your property? We do general cleanups that fit your needs: garden bed cleanups, debris hauling, grass removal, and fresh bark or gravel spreading.',
    metaTitle: 'General Yard Cleanups & Debris Hauling | LZM Landscaping LLC | Gig Harbor',
    metaDescription: 'Fast, thorough yard cleanups, garden bed weeding, grass removal, bark spreading, and debris hauling in Gig Harbor & Tacoma. Call (253) 358-5125.',
    image: cleanupsImg,
    features: [
      'Overgrown garden bed cleanups and detailed hand weeding',
      'Complete yard debris and bramble hauling',
      'Old lawn, sod, and grass removal',
      'Fresh bark, mulch, or decorative gravel spreading',
      'Pruning and dead vegetation removal'
    ],
    benefits: [
      'Immediately transforms neglected, overgrown yards into clean outdoor spaces',
      'Eliminates pest habitats, rotting debris, and invasive weed roots',
      'Prepares your soil and landscape for new planting or fresh sod',
      'Fast turnaround with zero hassle—we handle all heavy lifting and hauling'
    ],
    processSteps: [
      { title: 'On-Site Evaluation', desc: 'We assess the volume of debris, overgrown beds, and yard goals to provide an accurate upfront quote.' },
      { title: 'Clearing & Weeding', desc: 'We pull invasive weeds, cut back brush, dig out unwanted grass, and clear garden beds.' },
      { title: 'Bark / Gravel Installation', desc: 'We spread premium beauty bark or decorative gravel to seal beds and prevent weed return.' },
      { title: 'Hauling & Final Sweeping', desc: 'All debris is loaded into our trucks and hauled away, leaving your grounds immaculate.' }
    ],
    faqs: [
      { question: 'What is included in a general yard cleanup?', answer: 'Our general cleanups are customized to your needs and commonly include weeding, shrub pruning, leaf and brush removal, grass removal, and new bark or gravel spreading.' },
      { question: 'Do you haul away all yard debris?', answer: 'Yes, 100% of organic waste and debris is hauled away and responsibly disposed of.' },
      { question: 'How quickly can you start?', answer: 'We typically schedule cleanups within a few days of estimate approval.' }
    ]
  },

  'hardscaping': {
    id: 'hardscaping',
    slug: 'hardscaping',
    title: 'Hardscaping',
    heroSubtitle: 'Retaining Walls, Pavers, Stone Walkways & Hardscape Renovations',
    shortDesc: 'Build a foundation for your outdoor living space with durable, high-quality stonework designed to last a lifetime: retaining walls, paver patios, stone walkways, and hardscape renovations.',
    metaTitle: 'Hardscaping, Pavers & Retaining Walls | LZM Landscaping LLC | Gig Harbor',
    metaDescription: 'Custom retaining walls, paver patios, stone walkways, and hardscape renovations in Gig Harbor, Tacoma & Pierce County. 15+ years experience. Call (253) 358-5125.',
    image: hardscapingImg,
    features: [
      'Structural and decorative retaining wall construction',
      'Custom paver patios, walkways, and driveways',
      'Natural stone pathways and garden terracing',
      'Complete hardscape renovations and repairs',
      'Compacted gravel base and proper drainage engineering'
    ],
    benefits: [
      'Stabilizes sloping hillsides and prevents Northwest soil erosion',
      'Creates flat, usable outdoor living space for entertaining and relaxing',
      'Permanent, weather-resistant structures built to withstand heavy rains',
      'Substantially increases your home’s resale value and curb appeal'
    ],
    processSteps: [
      { title: 'Design & Base Excavation', desc: 'We assess slopes, drainage, and layout, then excavate to undisturbed subsoil.' },
      { title: 'Aggregated Compacted Base', desc: 'We install commercial-grade crushed rock and mechanical plate compaction for zero settling.' },
      { title: 'Precision Block & Stone Laying', desc: 'Retaining blocks or pavers are set level with interlocking joinery and geogrid reinforcement where needed.' },
      { title: 'Polymeric Sand & Drainage Backfill', desc: 'We install perforated drainage pipe behind walls and lock paver joints to prevent weeds and shifting.' }
    ],
    faqs: [
      { question: 'Do you install both retaining walls and paver patios?', answer: 'Yes! Hardscaping includes both structural retaining walls and paver patios, walkways, and outdoor stone renovations.' },
      { question: 'How deep is the base foundation you install?', answer: 'Depending on soil and project height, we install 4 to 8 inches of mechanically compacted aggregate base with geo-textile fabric to ensure zero sinking.' },
      { question: 'How can I get an estimate?', answer: 'Call or text Luis directly at (253) 358-5125 for a free on-site design consultation.' }
    ]
  },

  'sprinklers': {
    id: 'sprinklers',
    slug: 'sprinklers',
    title: 'Sprinkler System Installation',
    heroSubtitle: 'Complete Irrigation Systems, System Repairs & Drip Lines',
    shortDesc: 'Ensure your lawn stays green and healthy with our full-service irrigation solutions and water-saving upgrades: whole new systems, existing system repairs, drip systems, and smart timer replacements.',
    metaTitle: 'Sprinkler System Installation & Repair | LZM Landscaping LLC | Gig Harbor',
    metaDescription: 'New sprinkler installation, leak repairs, smart Wi-Fi timers, and plant drip systems in Gig Harbor and Tacoma WA. Call (253) 358-5125.',
    image: sprinklersImg,
    features: [
      'Full automatic underground sprinkler system installation',
      'Comprehensive repairs for leaks, broken lines, and stuck valves',
      'Targeted drip irrigation systems for garden plants and shrubs',
      'Smart Wi-Fi timer and controller replacements',
      'Head adjustments, nozzle replacements, and zone pressure balancing'
    ],
    benefits: [
      'Keeps your grass green and garden flourishing all summer without hand-watering',
      'Smart controllers prevent over-watering and cut utility water bills',
      'Targeted root-zone drip lines reduce plant fungus and evaporative waste',
      'Reliable, automated operation backed by expert installation'
    ],
    processSteps: [
      { title: 'Water Pressure & Layout Audit', desc: 'We test PSI, flow rate, and sun zones to plan balanced irrigation coverage.' },
      { title: 'Trenching & Line Placement', desc: 'We install high-grade PVC/poly pipe and heavy-duty commercial sprinkler heads.' },
      { title: 'Drip Lines & Smart Controller', desc: 'We wire multi-zone smart controllers and lay dedicated plant bed drip lines.' },
      { title: 'Pressure Testing & Calibration', desc: 'Every zone is tested, head spray arcs are adjusted, and run times are programmed.' }
    ],
    faqs: [
      { question: 'Can you fix my existing sprinkler system instead of replacing it?', answer: 'Yes! We repair broken heads, leaking pipes, malfunctioning valves, and outdated control timers.' },
      { question: 'Do you install drip irrigation for flower beds and vegetable gardens?', answer: 'Yes, drip irrigation is ideal for gardens, shrub beds, and hanging pots because it delivers water directly to plant roots.' },
      { question: 'How do I schedule an irrigation quote?', answer: 'Call or text Luis at (253) 358-5125 for a free estimate.' }
    ]
  }
};

// Aliases for backwards compatibility with previously indexed URLs
export const servicesData: Record<string, ServiceDetail> = {
  ...baseServices,
  'lawn-maintenance': baseServices['lawn-care'],
  'tree-service-trimming': baseServices['tree-service'],
  'general-cleanups': baseServices['cleanups'],
  'yard-cleanups': baseServices['cleanups'],
  'pavers': baseServices['hardscaping'],
  'retaining-walls': baseServices['hardscaping'],
  'sprinkler-system-installation': baseServices['sprinklers'],
  'sprinklers-drip-systems': baseServices['sprinklers']
};

export const officialServicesList = [
  baseServices['lawn-care'],
  baseServices['tree-service'],
  baseServices['cleanups'],
  baseServices['hardscaping'],
  baseServices['sprinklers']
];
