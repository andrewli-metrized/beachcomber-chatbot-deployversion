
export const SYSTEM_INSTRUCTION = `
You are a business-like, friendly, and expert customer service chatbot for Beachcomber Hot Tubs. Your name is 'BeachBot'.
Your primary goal is to answer user questions based on the provided FAQ data while pitching the product and build confidence in
the customer without being too pushy. 
Your goal is to answer user questions based ONLY on the provided FAQ data and maintain a professional and friendly tone.
- Analyze the user's question and find the most relevant section in the FAQ data.
- Formulate a clear and concise answer using only the information from the provided text.
- Do not reiterate points. Try to be original and don't keep reintroducing yourself.
- Do not make up any information, prices, or policies.
- If the answer to a question is not available in the provided text, you must politely state that you don't have that information and recommend contacting Beachcomber customer support directly.
- Keep your answers helpful and conversational. Start your first response with a friendly greeting.
- Structure your answers in an easy-to-read format, using bullet points or short paragraphs if needed.
`;

export const FAQ_DATA = `
# Beachcomber Hot Tubs – Frequently Asked Questions

## General FAQs (Help Center)

### How to Choose a Hot Tub / What else should I buy?
A hot tub cover (Heatshield) is essential for enjoyment and maintenance. Its lifespan varies with climate, usage, and exposure.

### What are the health benefits of a hot tub?
Just 15 minutes of soaking can enhance cardiovascular health, ease back and muscle pain, reduce blood pressure, and even support calorie burning.

### What is hydrotherapy?
Hydrotherapy combines heat, massage, and buoyancy to relieve symptoms like arthritis or muscle pain by improving blood flow to damaged tissues.

### What does SLB mean?
It refers to the integrated Sound, Lights, BIC-e system used in control panels.

### Are all Beachcomber hot tubs fully foamed?
LEEP tubs: Use Eco3WALL insulation with internal packaging.
HYBRID tubs: Feature Eco4WALL insulation with an external management system for easy access.

### Can a turbo pump be added after assembly?
No. Turbo pumps must be installed during production.

### Tell me about your guarantee
If purchased via e-Store or Outlet Experience Centers, the guarantee is direct from Beachcomber. If bought through an independent dealer, the dealer handles the guarantee.

### Differences between LEEP and Hybrid tubs?
LEEP: Insulation and controls inside the tub cavity.
Hybrid: Energy management system placed forward beneath tiered steps for better service access.

### Does Beachcomber handle installation?
Installation is negotiated with independent dealerships—policies vary.

### Are tubs allowed in multi-resident/commercial settings?
No. The tubs are certified only for residential use; warranties are void in commercial environments.

## Maintenance FAQs (How to Maintain Your Beachcomber)

### FL / FLO error?
Indicates various potential issues—contact tech support for troubleshooting.

### Why is my pump shutting off?
Likely due to a temperature drop of more than 3°F below water temp or heat trapped under the cover; incrementally adjust temperature or prop up the cover.

### What is Economy Mode?
Heater operates during two 2-hour windows daily; you can adjust this by changing filter times.

### What is Sleep Mode?
Heater remains off until water temperature drops 20°F (10°C) below the set point.

### Water leaking from air intake?
Caused by loose or missing jets—tighten or replace as needed with O-rings or gaskets.

### Topside control lights on 700 Series not working?
LED bulbs may have burned out and need replacement.

### How to winterize?
Drain, blow out plumbing with a shop vac, then add RV antifreeze to floor drains and filter areas.

### How often to drain?
With moderate use (2 people, 3–4 times/week), drain every ~4 months; more frequent use requires shorter intervals.

### Should I drain when away on vacation?
If away for under a month and power is stable, keep operating—set heater to Sleep mode on newer models to conserve.

### Filter cycle recommendations?
Default: two 2-hour cycles/day. Increase if heavily used or you have a Hush pump (affects heater on-times).

## Water Care FAQs (Maintain My Hot Tub Water)

### How often to change the Microfilter?
Rinse weekly—or more frequently if used over three times per week.

### Salt generators?
Not recommended—salt corrodes pump seals and heater elements.

### Hydrogen Peroxide usage?
Not advised—ineffective at high heat and not approved by Health Canada as a sanitizer.

### Switching from Chlorine to Bromine?
Yes —can switch without draining. But not vice versa; requires a full drain.

### Holiday Tender vs. Floating Puck?
Both perform similarly; pick based on preference. Note the Tender sits inside the Microfilter basket.

### Filter canister dimensions?
26″ tall and 7″ wide; weighs around 5 lbs.

### White biofilm or flakes in water?
Likely buildup in pipe—shock the tub and circulate; may need multiple drains for severe cases.

### Cleartech UVC effectiveness?
Helps reduce chemical use but doesn't replace chlorine/bromine residuals.

### Need residual sanitizer with Cleartech?
Yes —keep chlorine at 3–5 ppm as a persistent oxidizer.

### Cleartech with ozone?
Yes—UVC sanitizes while ozone oxidizes; the two work well together.

## Ordering FAQs (Ordering from Beachcomber Hot Tubs)

### Checking order status?
Sign in or contact customer support.

### Received broken items?
Refuse delivery if possible, and contact immediately for a replacement.

### Customizing online orders?
Not available online; customization must be done through a dealer for a fee.

### COVID quality impacts?
None—quality standards remain unchanged.

### Direct delivery from Beachcomber?
Options include curbside, wet-start, or 5-Star Placement depending on your location.

### Flex Jet exchange?
Contact your dealer for exchanges; otherwise, support can guide you.
`;
